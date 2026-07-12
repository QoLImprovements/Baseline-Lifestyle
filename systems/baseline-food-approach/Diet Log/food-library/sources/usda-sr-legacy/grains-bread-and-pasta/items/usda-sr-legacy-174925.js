/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-thin",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "slice-crust-not-eaten",
      "kind": "unit",
      "label": "slice crust not eaten"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "cup-crumbs",
      "kind": "unit",
      "label": "cup, crumbs"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "slice-very-thin",
      "kind": "unit",
      "label": "slice, very thin"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "slice-thin-crust-not-eaten",
      "kind": "unit",
      "label": "slice thin, crust not eaten"
    }
  ],
  "name": "Bread, white, commercially prepared, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 54.5,
    "energy_kcal": 1210.0,
    "fat_g": 4.0,
    "fibre_g": 2.9,
    "folate_ug": 104.0,
    "iron_mg": 3.33,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 131.0,
    "protein_g": 9.0,
    "salt_g": 1.3425,
    "sat_fat_g": 0.764,
    "sodium_mg": 537.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174925",
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
