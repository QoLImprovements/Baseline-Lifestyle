/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including large, individual and bite-sized rolls",
  "id": "cofid-current-11-834",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, Swiss rolls, chocolate covered and filled, retail",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 51.0,
    "energy_kcal": 414.0,
    "fat_g": 22.7,
    "fibre_g": 3.1,
    "folate_ug": 13.0,
    "iron_mg": 2.66,
    "magnesium_mg": 44.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 186.0,
    "potassium_mg": 331.0,
    "protein_g": 4.5,
    "salt_g": 0.6475,
    "sat_fat_g": 11.68,
    "sodium_mg": 259.0,
    "sugar_g": 41.2,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-834",
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
