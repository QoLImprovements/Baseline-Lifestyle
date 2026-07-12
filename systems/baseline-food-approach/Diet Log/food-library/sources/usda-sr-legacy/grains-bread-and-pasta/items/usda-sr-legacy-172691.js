/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "slice-thin-3-3-4-x-5-x-3-8",
      "kind": "unit",
      "label": "slice, thin (3-3/4\" x 5\" x 3/8\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, whole-wheat, prepared from recipe, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 56.4,
    "energy_kcal": 1280.0,
    "fat_g": 5.9,
    "fibre_g": 6.7,
    "folate_ug": 67.0,
    "iron_mg": 3.4,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 345.0,
    "protein_g": 9.2,
    "salt_g": 0.9525,
    "sat_fat_g": 0.874,
    "sodium_mg": 381.0,
    "sugar_g": 4.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172691",
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
