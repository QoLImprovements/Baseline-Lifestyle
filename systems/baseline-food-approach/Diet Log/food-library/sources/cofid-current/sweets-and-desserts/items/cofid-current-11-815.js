/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Maryland, Fox's and own brand",
  "id": "cofid-current-11-815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, cookies, chocolate chip, standard",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 60.0,
    "energy_kcal": 471.0,
    "fat_g": 24.9,
    "fibre_g": 3.0,
    "folate_ug": 36.0,
    "iron_mg": 2.3,
    "magnesium_mg": 34.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 132.0,
    "potassium_mg": 217.0,
    "protein_g": 5.4,
    "salt_g": 0.745,
    "sat_fat_g": 12.15,
    "sodium_mg": 298.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-815",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
