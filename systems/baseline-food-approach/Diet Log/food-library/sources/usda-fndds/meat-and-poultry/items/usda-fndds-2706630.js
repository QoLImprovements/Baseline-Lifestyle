/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-pie-any-size",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1260.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    }
  ],
  "name": "Pot pie, beef",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 24.0,
    "energy_kcal": 271.0,
    "fat_g": 15.4,
    "fibre_g": 2.0,
    "folate_ug": 36.0,
    "iron_mg": 1.71,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 102.0,
    "potassium_mg": 173.0,
    "protein_g": 8.92,
    "salt_g": 0.935,
    "sat_fat_g": 5.45,
    "sodium_mg": 374.0,
    "sugar_g": 3.33,
    "vitamin_a_ug": 121.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706630",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
