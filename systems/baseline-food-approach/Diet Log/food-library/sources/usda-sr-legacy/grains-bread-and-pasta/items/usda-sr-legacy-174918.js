/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-snack-size",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "slice-snack-size",
      "kind": "unit",
      "label": "slice, snack-size"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice, regular"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "slice-5-x-4-x-3-8",
      "kind": "unit",
      "label": "slice (5\" x 4\" x 3/8\")"
    }
  ],
  "name": "Bread, pumpernickel",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 47.5,
    "energy_kcal": 1050.0,
    "fat_g": 3.1,
    "fibre_g": 6.5,
    "folate_ug": 93.0,
    "iron_mg": 2.87,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 208.0,
    "protein_g": 8.7,
    "salt_g": 1.49,
    "sat_fat_g": 0.437,
    "sodium_mg": 596.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174918",
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
