/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 1260.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shepherd's pie",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 8.72,
    "energy_kcal": 123.0,
    "fat_g": 6.3,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.93,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 87.0,
    "potassium_mg": 250.0,
    "protein_g": 7.64,
    "salt_g": 0.66,
    "sat_fat_g": 2.67,
    "sodium_mg": 264.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706594",
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
