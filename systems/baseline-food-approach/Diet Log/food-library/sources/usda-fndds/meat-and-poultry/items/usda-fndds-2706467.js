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
  "id": "usda-fndds-2706467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-meatball-with-sauce",
      "kind": "unit",
      "label": "1 meatball with sauce"
    }
  ],
  "name": "Meatballs, NS as to type of meat, with sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.15,
    "energy_kcal": 186.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.79,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 145.0,
    "potassium_mg": 212.0,
    "protein_g": 18.0,
    "salt_g": 2.0025,
    "sat_fat_g": 4.56,
    "sodium_mg": 801.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706467",
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
