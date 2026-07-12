/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 13-507 and 13-416",
  "id": "cofid-current-13-545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, white, fried in salted butter",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.4,
    "energy_kcal": 106.0,
    "fat_g": 11.0,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 0.0,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 340.0,
    "protein_g": 1.4,
    "salt_g": 0.375,
    "sat_fat_g": 7.36,
    "sodium_mg": 150.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-545",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
