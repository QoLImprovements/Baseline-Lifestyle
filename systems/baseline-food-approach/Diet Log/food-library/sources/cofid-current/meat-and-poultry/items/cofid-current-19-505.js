/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "5 samples; unsmoked British gammon",
  "id": "cofid-current-19-505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham, gammon rashers, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 199.0,
    "fat_g": 9.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.8,
    "magnesium_mg": 26.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 230.0,
    "potassium_mg": 380.0,
    "protein_g": 27.5,
    "salt_g": 3.4,
    "sat_fat_g": 3.4,
    "sodium_mg": 1360.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-505",
  "state": "Grilled",
  "subcategory": "MAA",
  "tags": [
    "grilled",
    "maa",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
