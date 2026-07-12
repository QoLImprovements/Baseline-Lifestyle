/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meatball-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-meatball-with-sauce",
      "kind": "unit",
      "label": "1 meatball with sauce"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meatballs, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 6.9,
    "energy_kcal": 225.0,
    "fat_g": 15.3,
    "fibre_g": 0.8,
    "folate_ug": 15.0,
    "iron_mg": 1.85,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 151.0,
    "potassium_mg": 324.0,
    "protein_g": 14.3,
    "salt_g": 2.305,
    "sat_fat_g": 4.22,
    "sodium_mg": 922.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706395",
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
