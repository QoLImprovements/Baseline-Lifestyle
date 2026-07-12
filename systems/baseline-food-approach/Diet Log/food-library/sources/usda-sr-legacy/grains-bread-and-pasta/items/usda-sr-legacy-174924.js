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
  "id": "usda-sr-legacy-174924",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "slice-crust-not-eaten",
      "kind": "unit",
      "label": "slice crust not eaten"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "cup-crumbs",
      "kind": "unit",
      "label": "cup, crumbs"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "slice-very-thin",
      "kind": "unit",
      "label": "slice, very thin"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "slice-thin-crust-not-eaten",
      "kind": "unit",
      "label": "slice thin, crust not eaten"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, white, commercially prepared (includes soft bread crumbs)",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 49.4,
    "energy_kcal": 266.0,
    "fat_g": 3.33,
    "fibre_g": 2.7,
    "folate_ug": 111.0,
    "iron_mg": 3.61,
    "magnesium_mg": 23.0,
    "omega3_g": 0.167,
    "phosphorus_mg": 98.0,
    "potassium_mg": 126.0,
    "protein_g": 8.85,
    "salt_g": 1.225,
    "sat_fat_g": 0.698,
    "sodium_mg": 490.0,
    "sugar_g": 5.67,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174924",
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
