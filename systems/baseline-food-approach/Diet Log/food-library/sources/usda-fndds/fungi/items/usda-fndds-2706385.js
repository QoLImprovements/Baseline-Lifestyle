/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-slice-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-sauce",
      "kind": "unit",
      "label": "1 slice with sauce"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Beef with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.83,
    "energy_kcal": 163.0,
    "fat_g": 7.54,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 1.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 149.0,
    "potassium_mg": 204.0,
    "protein_g": 22.0,
    "salt_g": 0.8875,
    "sat_fat_g": 2.7,
    "sodium_mg": 355.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706385",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
