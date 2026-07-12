/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "box",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "waffle",
      "kind": "unit",
      "label": "waffle"
    }
  ],
  "name": "Van's, Gluten Free, Totally Original Waffles",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 40.5,
    "energy_kcal": 1040.0,
    "fat_g": 8.22,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.56,
    "magnesium_mg": 31.0,
    "omega3_g": 0.769,
    "phosphorus_mg": 345.0,
    "potassium_mg": 121.0,
    "protein_g": 2.99,
    "salt_g": 1.27,
    "sat_fat_g": 0.781,
    "sodium_mg": 508.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168011",
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
