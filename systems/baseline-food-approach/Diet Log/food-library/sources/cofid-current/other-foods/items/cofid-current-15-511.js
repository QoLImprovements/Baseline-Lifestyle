/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Pastry shapes in pigeon pea sauce.",
  "id": "cofid-current-15-511",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dal Dhokari, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 19.2,
    "energy_kcal": 123.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.0,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 333.0,
    "protein_g": 5.6,
    "salt_g": 0.855,
    "sat_fat_g": 0.51,
    "sodium_mg": 342.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-511",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
