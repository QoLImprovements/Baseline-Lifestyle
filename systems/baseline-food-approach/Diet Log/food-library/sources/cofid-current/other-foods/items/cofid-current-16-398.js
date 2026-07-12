/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 7 products, frozen and chilled",
  "id": "cofid-current-16-398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kippers, flesh only, boil in the bag, with butter, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 0.0,
    "energy_kcal": 193.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.11,
    "magnesium_mg": 38.0,
    "omega3_g": 2.19,
    "phosphorus_mg": 208.0,
    "potassium_mg": 254.0,
    "protein_g": 18.6,
    "salt_g": 2.15,
    "sat_fat_g": 2.96,
    "sodium_mg": 860.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-398",
  "state": "Cooked",
  "subcategory": "JC",
  "tags": [
    "cooked",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
