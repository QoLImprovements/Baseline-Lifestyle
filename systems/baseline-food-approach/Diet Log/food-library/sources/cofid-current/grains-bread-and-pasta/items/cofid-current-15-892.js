/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Calculated using 54% retail curry (15-619) and 46% plain ready cooked rice (11-884)",
  "id": "cofid-current-15-892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, retail, with rice",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 20.2,
    "energy_kcal": 125.0,
    "fat_g": 4.1,
    "fibre_g": 1.5,
    "folate_ug": 33.0,
    "iron_mg": 0.51,
    "magnesium_mg": 14.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 52.0,
    "potassium_mg": 163.0,
    "protein_g": 3.0,
    "salt_g": 0.4425,
    "sat_fat_g": 1.16,
    "sodium_mg": 177.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-892",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
