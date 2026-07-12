/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products",
  "id": "cofid-current-19-467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork pie, individual",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 25.7,
    "energy_kcal": 370.0,
    "fat_g": 26.0,
    "fibre_g": 2.9,
    "folate_ug": 2.0,
    "iron_mg": 2.89,
    "magnesium_mg": 7.0,
    "omega3_g": 0.34,
    "phosphorus_mg": 23.0,
    "potassium_mg": 153.0,
    "protein_g": 9.9,
    "salt_g": 1.355,
    "sat_fat_g": 10.12,
    "sodium_mg": 542.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 2.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-467",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
