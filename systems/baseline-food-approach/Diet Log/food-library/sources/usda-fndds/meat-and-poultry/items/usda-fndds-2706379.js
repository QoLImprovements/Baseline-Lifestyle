/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch-boneless-cooked",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch-boneless-cooked",
      "kind": "unit",
      "label": "1 cubic inch, boneless, cooked"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "1-large-patty-with-gravy",
      "kind": "unit",
      "label": "1 large patty with gravy"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-small-patty-with-gravy",
      "kind": "unit",
      "label": "1 small patty with gravy"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-medium-patty-with-gravy",
      "kind": "unit",
      "label": "1 medium patty with gravy"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-gravy",
      "kind": "unit",
      "label": "1 slice with gravy"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.58,
    "energy_kcal": 156.0,
    "fat_g": 7.05,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.79,
    "magnesium_mg": 15.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 140.0,
    "potassium_mg": 188.0,
    "protein_g": 21.6,
    "salt_g": 0.9,
    "sat_fat_g": 2.57,
    "sodium_mg": 360.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706379",
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
