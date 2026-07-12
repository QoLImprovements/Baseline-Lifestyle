/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-11-1006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, white, soft",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 51.5,
    "energy_kcal": 254.0,
    "fat_g": 2.6,
    "fibre_g": 2.6,
    "folate_ug": 27.0,
    "iron_mg": 1.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 145.0,
    "protein_g": 9.3,
    "salt_g": 1.0,
    "sat_fat_g": 0.62,
    "sodium_mg": 400.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1006",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
