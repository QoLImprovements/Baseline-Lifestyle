/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw using a weight loss of 3.8%",
  "id": "cofid-current-13-536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 11.2,
    "energy_kcal": 70.0,
    "fat_g": 0.7,
    "fibre_g": 5.5,
    "folate_ug": 31.0,
    "iron_mg": 1.82,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 177.0,
    "protein_g": 5.5,
    "salt_g": 0.01,
    "sat_fat_g": 0.14,
    "sodium_mg": 4.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-536",
  "state": "Boiled",
  "subcategory": "DF",
  "tags": [
    "boiled",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
