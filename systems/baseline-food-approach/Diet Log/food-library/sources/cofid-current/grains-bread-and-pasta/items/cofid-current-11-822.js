/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "5 samples, 2 products, Ryvita original and Ryvita dark",
  "id": "cofid-current-11-822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crispbread, rye",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 63.4,
    "energy_kcal": 284.0,
    "fat_g": 1.4,
    "fibre_g": 20.0,
    "folate_ug": 29.0,
    "iron_mg": 2.5,
    "magnesium_mg": 89.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 292.0,
    "potassium_mg": 511.0,
    "protein_g": 8.6,
    "salt_g": 0.66,
    "sat_fat_g": 0.16,
    "sodium_mg": 264.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-822",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
