/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-42-medium-seeds",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-42-medium-seeds",
      "kind": "unit",
      "label": "oz (42 medium seeds)"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Seeds, lotus seeds, dried",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 64.5,
    "energy_kcal": 1390.0,
    "fat_g": 1.97,
    "fibre_g": 0.0,
    "folate_ug": 104.0,
    "iron_mg": 3.53,
    "magnesium_mg": 210.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 626.0,
    "potassium_mg": 1370.0,
    "protein_g": 15.4,
    "salt_g": 0.0125,
    "sat_fat_g": 0.33,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170149",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
