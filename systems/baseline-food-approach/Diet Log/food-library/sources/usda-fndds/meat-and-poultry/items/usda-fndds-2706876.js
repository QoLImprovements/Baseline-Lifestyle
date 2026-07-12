/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-slice-with-onions",
      "kind": "unit",
      "label": "1 slice with onions"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-cubic-inch-cooked",
      "kind": "unit",
      "label": "1 cubic inch, cooked"
    }
  ],
  "name": "Liver, beef or calves, and onions",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.97,
    "energy_kcal": 129.0,
    "fat_g": 3.6,
    "fibre_g": 0.5,
    "folate_ug": 164.0,
    "iron_mg": 3.85,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 309.0,
    "potassium_mg": 277.0,
    "protein_g": 16.7,
    "salt_g": 0.69,
    "sat_fat_g": 1.68,
    "sodium_mg": 276.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 4730.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706876",
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
