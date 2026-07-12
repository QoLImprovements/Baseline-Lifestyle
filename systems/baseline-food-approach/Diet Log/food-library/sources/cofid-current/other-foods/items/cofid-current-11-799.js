/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-11-799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, digestive, plain",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 65.6,
    "energy_kcal": 463.0,
    "fat_g": 21.3,
    "fibre_g": 3.8,
    "folate_ug": 11.0,
    "iron_mg": 1.8,
    "magnesium_mg": 31.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 119.0,
    "potassium_mg": 215.0,
    "protein_g": 6.2,
    "salt_g": 1.4025,
    "sat_fat_g": 7.71,
    "sodium_mg": 561.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.32,
    "vitamin_k_ug": 1.51
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-799",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
