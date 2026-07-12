/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Calculated from 14-281",
  "id": "cofid-current-14-370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice, freshly squeezed, weighed as whole fruit",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 3.7,
    "energy_kcal": 15.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.1,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 83.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-370",
  "state": "Unspecified",
  "subcategory": "FC",
  "tags": [
    "beverages",
    "fc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
