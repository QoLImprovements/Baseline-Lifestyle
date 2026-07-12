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
  "id": "usda-fndds-2706518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "1-cup-yield-after-bone-removed",
      "kind": "unit",
      "label": "1 cup (yield after bone removed)"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "1-serving-2-pig-s-feet-3-x-2-two-slices-spanish-sausage-1-x",
      "kind": "unit",
      "label": "1 serving (2 pig's feet, 3\" x 2\", two slices Spanish sausage, 1\" x 1/4\", 1/2 cup sauce) (yield after bone removed)"
    }
  ],
  "name": "Stewed pig's feet, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.13,
    "energy_kcal": 136.0,
    "fat_g": 8.7,
    "fibre_g": 0.5,
    "folate_ug": 6.0,
    "iron_mg": 0.76,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 67.0,
    "potassium_mg": 180.0,
    "protein_g": 9.99,
    "salt_g": 1.2075,
    "sat_fat_g": 2.26,
    "sodium_mg": 483.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706518",
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
