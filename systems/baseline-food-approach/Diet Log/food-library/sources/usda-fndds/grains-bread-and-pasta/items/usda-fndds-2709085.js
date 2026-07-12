/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spanish rice, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 19.6,
    "energy_kcal": 115.0,
    "fat_g": 2.6,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 1.11,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 123.0,
    "protein_g": 2.87,
    "salt_g": 0.775,
    "sat_fat_g": 0.501,
    "sodium_mg": 310.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 11.2,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709085",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
