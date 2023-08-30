'use client'
import { useState } from 'react';
import styles from './CouponForm.module.scss';
import { AddIcon } from '../icons';
import Image from 'next/image';
import DeleteIcon from '../icons/deleteIcon';
import DatePicker from 'react-datepicker'


const CouponForm = () => {


    const [ imageList, setImageList ] = useState<any[]>([])
    const handleImageChange = (event:any) => {
        console.log('chao')
        const file = event.target.files[0];
        if(file) {
            setImageList(prevArray => [...prevArray, file])
        }
    }
    const handleDeleteImage = (i:number, e:any) => {
        e.stopPropagation();
        console.log('Hola')
        const newArray = imageList.filter((image, index) => index !== i );
        setImageList(newArray);
    }


    return (
        <div className={styles.CouponForm}>
            <h1>Crear Nuevo Cupon</h1>

            <form action="">


                <div className={styles.section}>
                    <div>
                        <h3>Información Básica</h3>
                    </div>
                    <hr />
                    <div>
                        
                        <div className={styles.textfield}>
                            <label htmlFor="">Code</label>
                            <input type="text" placeholder='Ingresa un código para el cupón'/>
                        </div>

                        <div className={styles.textfield}>
                            <label htmlFor="">Título</label>
                            <input type="text" placeholder='Ingresa el Título para el cupón'/>
                        </div>

                        <div className={styles.double}>
                            <div className={styles.textfield}>
                                <label htmlFor="">Categoria</label>
                                <select name="" id="">
                                    <option value="">Selecciona una categoria</option>
                                </select>
                            </div>
                            <div className={styles.textfield}>
                                <label htmlFor="">Subcategoria</label>
                                <select name="" id="">
                                    <option value="">Selecciona una categoria</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>



                <div className={styles.section}>
                    <div>
                        <h3>Galeria</h3>
                    </div>
                    <hr />
                    <div>
                        <input hidden type="file" accept='image/jpeg' id='select-image' onChange={handleImageChange} />
                        <label htmlFor="select-image">
                            <div className={styles.addImage}>

                                {
                                    imageList.length == 0 ? (
                                        <div className={styles.empty}>
                                            <AddIcon width={35} height={35}/>
                                            <span>Agregar imagenes a la galería</span>
                                        </div>
                                    ) : (
                                        imageList.map((image,index)=>{
                                            const url = URL.createObjectURL(image);
                                            return (
                                                <div onClick={(e)=> handleDeleteImage(index, e)} className={styles.imageContainer}>
                                                    <Image src={url} width={140} height={140} alt=''/>
                                                    <DeleteIcon className={styles.icon} width={50} height={50}/>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </label>

                    </div>
                </div>



                <div className={styles.section}>
                    <div>
                        <h3>Detalles</h3>
                    </div>
                    <hr />
                    <div>
                        
                        <div className={styles.textfield}>
                            <label htmlFor="">Resumen</label>
                            <textarea rows={8} placeholder='Ingresa un código para el cupón'/>
                        </div>

                        <div className={styles.textfield}>
                            <label htmlFor="">Etiquetas</label>
                            <input type="text" placeholder='Ingresa las etiquetas separadas por comas'/>
                        </div>

                    </div>
                </div>



                <div className={styles.section}>
                    <div>
                        <h3>Reservación</h3>
                    </div>
                    <hr />
                    <div>
                        
                        <div className={styles.textfield}>
                            <label htmlFor="">Resumen</label>
                            <textarea rows={8} placeholder='Ingresa un código para el cupón'/>
                        </div>

                        <div className={styles.textfield}>
                            <label htmlFor="">Etiquetas</label>
                            <input type="text" placeholder='Ingresa las etiquetas separadas por comas'/>
                        </div>

                    </div>
                </div>









                <div className={styles.section}>
                    <div>
                        <h3>Fechas</h3>
                    </div>
                    <hr />
                    <div>

                        <div className={styles.double}>
                            <div className={styles.textfield}>
                                <label htmlFor="">Categoria</label>
                                
                            </div>
                            <div className={styles.textfield}>
                                <label htmlFor="">Subcategoria</label>
                                <select name="" id="">
                                    <option value="">Selecciona una categoria</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>





            </form>
        </div>
    )
}
export default CouponForm