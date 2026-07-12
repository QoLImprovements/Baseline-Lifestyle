/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, 3 from London, 3 from Birmingham, 2 from Leeds and 3 from Bradford, crispy vegetable fitters",
  "id": "cofid-current-15-620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora, vegetable, takeaway and restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 16.5,
    "energy_kcal": 293.0,
    "fat_g": 22.0,
    "fibre_g": 3.3,
    "folate_ug": 34.0,
    "iron_mg": 2.45,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 504.0,
    "protein_g": 8.4,
    "salt_g": 1.1975,
    "sat_fat_g": 3.73,
    "sodium_mg": 479.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-620",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
