/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "waffle",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174105",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "waffle",
      "kind": "unit",
      "label": "waffle"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    }
  ],
  "name": "Waffles, gluten-free, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 43.0,
    "energy_kcal": 1100.0,
    "fat_g": 8.84,
    "fibre_g": 1.4,
    "folate_ug": 8.0,
    "iron_mg": 0.63,
    "magnesium_mg": 31.0,
    "omega3_g": 0.769,
    "phosphorus_mg": 359.0,
    "potassium_mg": 124.0,
    "protein_g": 2.72,
    "salt_g": 1.2625,
    "sat_fat_g": 0.781,
    "sodium_mg": 505.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174105",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
