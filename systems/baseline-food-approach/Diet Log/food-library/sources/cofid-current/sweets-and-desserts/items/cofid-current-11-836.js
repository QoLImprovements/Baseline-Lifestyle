/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including plain carrot and products with orange and walnuts",
  "id": "cofid-current-11-836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, carrot, iced, retail",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 46.8,
    "energy_kcal": 374.0,
    "fat_g": 20.2,
    "fibre_g": 1.9,
    "folate_ug": 9.0,
    "iron_mg": 0.92,
    "magnesium_mg": 14.0,
    "omega3_g": 1.03,
    "phosphorus_mg": 169.0,
    "potassium_mg": 140.0,
    "protein_g": 4.2,
    "salt_g": 0.55,
    "sat_fat_g": 5.14,
    "sodium_mg": 220.0,
    "sugar_g": 34.5,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-836",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
