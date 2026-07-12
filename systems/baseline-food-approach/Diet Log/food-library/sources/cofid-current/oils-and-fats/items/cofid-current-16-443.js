/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from baked 16-409 using analysed water and fat values",
  "id": "cofid-current-16-443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scampi, coated in breadcrumbs, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 22.2,
    "energy_kcal": 243.0,
    "fat_g": 13.0,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 1.74,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 213.0,
    "protein_g": 10.6,
    "salt_g": 1.28,
    "sat_fat_g": 1.15,
    "sodium_mg": 512.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-443",
  "state": "Fried",
  "subcategory": "JK",
  "tags": [
    "fried",
    "jk",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
