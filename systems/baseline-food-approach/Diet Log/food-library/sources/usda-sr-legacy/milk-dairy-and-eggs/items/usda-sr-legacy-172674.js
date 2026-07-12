/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-5-x-3-x-1-2",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "slice-5-x-3-x-1-2",
      "kind": "unit",
      "label": "slice (5\" x 3\" x 1/2\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, egg, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 52.6,
    "energy_kcal": 1320.0,
    "fat_g": 6.6,
    "fibre_g": 2.5,
    "folate_ug": 98.0,
    "iron_mg": 3.34,
    "magnesium_mg": 21.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 117.0,
    "potassium_mg": 126.0,
    "protein_g": 10.5,
    "salt_g": 1.0425,
    "sat_fat_g": 1.62,
    "sodium_mg": 417.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172674",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
