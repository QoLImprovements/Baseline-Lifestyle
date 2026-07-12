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
  "id": "usda-fndds-2706510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sausage and rice with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 16.4,
    "energy_kcal": 134.0,
    "fat_g": 5.49,
    "fibre_g": 0.7,
    "folate_ug": 33.0,
    "iron_mg": 1.1,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 54.0,
    "potassium_mg": 163.0,
    "protein_g": 4.63,
    "salt_g": 1.6825,
    "sat_fat_g": 1.56,
    "sodium_mg": 673.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706510",
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
