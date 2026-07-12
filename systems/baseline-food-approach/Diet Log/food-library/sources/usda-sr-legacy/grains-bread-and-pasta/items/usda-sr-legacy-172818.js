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
  "id": "usda-sr-legacy-172818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
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
      "gramsPerUnit": 45.0,
      "key": "cup-crumbs",
      "kind": "unit",
      "label": "cup, crumbs"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    }
  ],
  "name": "Bread, white, commercially prepared, low sodium, no salt",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 49.6,
    "energy_kcal": 1120.0,
    "fat_g": 3.6,
    "fibre_g": 2.3,
    "folate_ug": 111.0,
    "iron_mg": 3.03,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 119.0,
    "protein_g": 8.2,
    "salt_g": 0.745,
    "sat_fat_g": 0.811,
    "sodium_mg": 298.0,
    "sugar_g": 4.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172818",
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
