/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stewed seasoned ground beef, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 3.83,
    "energy_kcal": 278.0,
    "fat_g": 22.8,
    "fibre_g": 0.9,
    "folate_ug": 10.0,
    "iron_mg": 1.82,
    "magnesium_mg": 20.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 138.0,
    "potassium_mg": 337.0,
    "protein_g": 13.8,
    "salt_g": 2.17,
    "sat_fat_g": 6.2,
    "sodium_mg": 868.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 13.5,
    "vitamin_e_mg": 2.78,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706396",
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
