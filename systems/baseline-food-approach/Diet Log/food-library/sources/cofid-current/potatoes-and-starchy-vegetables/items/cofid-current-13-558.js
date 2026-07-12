/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from ingredients; made up as packet directions",
  "id": "cofid-current-13-558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato powder, instant, made up with water",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.5,
    "energy_kcal": 57.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 0.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 260.0,
    "protein_g": 1.5,
    "salt_g": 0.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 100.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.9
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-558",
  "state": "Unspecified",
  "subcategory": "DAR",
  "tags": [
    "dar",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
