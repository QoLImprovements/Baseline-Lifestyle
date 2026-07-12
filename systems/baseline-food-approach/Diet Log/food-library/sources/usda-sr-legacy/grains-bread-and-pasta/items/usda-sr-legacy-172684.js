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
  "id": "usda-sr-legacy-172684",
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
      "gramsPerUnit": 25.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice, regular"
    }
  ],
  "name": "Bread, rye",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 48.3,
    "energy_kcal": 1080.0,
    "fat_g": 3.3,
    "fibre_g": 5.8,
    "folate_ug": 110.0,
    "iron_mg": 2.83,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 166.0,
    "protein_g": 8.5,
    "salt_g": 1.5075,
    "sat_fat_g": 0.626,
    "sodium_mg": 603.0,
    "sugar_g": 3.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172684",
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
