/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-325524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Seeds, sunflower seed kernels, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 17.1,
    "energy_kcal": 612.0,
    "fat_g": 56.1,
    "fibre_g": 10.3,
    "folate_ug": 169.0,
    "iron_mg": 5.21,
    "magnesium_mg": 358.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 750.0,
    "potassium_mg": 689.0,
    "protein_g": 21.0,
    "salt_g": 1.33,
    "sat_fat_g": 5.36,
    "sodium_mg": 532.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 19.6,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "325524",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
