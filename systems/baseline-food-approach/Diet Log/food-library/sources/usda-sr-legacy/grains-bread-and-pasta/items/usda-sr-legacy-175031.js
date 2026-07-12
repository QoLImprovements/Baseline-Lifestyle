/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll-3-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "roll-3-1-2-dia",
      "kind": "unit",
      "label": "roll (3-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Rolls, hard (includes kaiser)",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 52.7,
    "energy_kcal": 1230.0,
    "fat_g": 4.3,
    "fibre_g": 2.3,
    "folate_ug": 95.0,
    "iron_mg": 3.28,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 108.0,
    "protein_g": 9.9,
    "salt_g": 1.36,
    "sat_fat_g": 0.606,
    "sodium_mg": 544.0,
    "sugar_g": 1.77,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175031",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
