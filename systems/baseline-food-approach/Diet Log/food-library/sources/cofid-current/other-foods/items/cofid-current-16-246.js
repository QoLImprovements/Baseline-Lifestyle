/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from boiled 16-245",
  "id": "cofid-current-16-246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shrimps, boiled, weighed with shells",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 0.0,
    "energy_kcal": 39.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 130.0,
    "protein_g": 7.9,
    "salt_g": 3.175,
    "sat_fat_g": 0.1,
    "sodium_mg": 1270.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-246",
  "state": "Boiled",
  "subcategory": "JK",
  "tags": [
    "boiled",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
