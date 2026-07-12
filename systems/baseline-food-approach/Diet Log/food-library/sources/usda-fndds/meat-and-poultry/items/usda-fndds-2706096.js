/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-nugget",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken nuggets, from frozen",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 17.9,
    "energy_kcal": 298.0,
    "fat_g": 19.2,
    "fibre_g": 1.8,
    "folate_ug": 37.0,
    "iron_mg": 1.06,
    "magnesium_mg": 28.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 183.0,
    "potassium_mg": 229.0,
    "protein_g": 13.4,
    "salt_g": 1.5,
    "sat_fat_g": 4.0,
    "sodium_mg": 600.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706096",
  "state": "Frozen",
  "subcategory": "Chicken patties, nuggets and tenders",
  "tags": [
    "chicken-patties-nuggets-and-tenders",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
