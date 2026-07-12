/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, cottonseed flour, partially defatted (glandless)",
  "nutritionPerBasis": {
    "calcium_mg": 478.0,
    "carbs_g": 40.5,
    "energy_kcal": 1500.0,
    "fat_g": 6.2,
    "fibre_g": 3.0,
    "folate_ug": 229.0,
    "iron_mg": 12.7,
    "magnesium_mg": 721.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1600.0,
    "potassium_mg": 1770.0,
    "protein_g": 41.0,
    "salt_g": 0.0875,
    "sat_fat_g": 1.59,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170555",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "grains-bread-and-pasta",
    "nut-and-seed-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
