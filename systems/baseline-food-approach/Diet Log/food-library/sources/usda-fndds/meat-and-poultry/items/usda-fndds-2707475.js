/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-any-size",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 250.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 1260.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    }
  ],
  "name": "Pot pie, no meat",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 28.0,
    "energy_kcal": 242.0,
    "fat_g": 12.2,
    "fibre_g": 3.5,
    "folate_ug": 71.0,
    "iron_mg": 1.88,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 97.0,
    "potassium_mg": 185.0,
    "protein_g": 5.44,
    "salt_g": 0.9,
    "sat_fat_g": 4.19,
    "sodium_mg": 360.0,
    "sugar_g": 3.69,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707475",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
