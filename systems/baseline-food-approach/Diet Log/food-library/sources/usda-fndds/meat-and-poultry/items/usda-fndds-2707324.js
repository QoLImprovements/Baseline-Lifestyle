/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg sandwich on biscuit, with sausage",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 18.6,
    "energy_kcal": 310.0,
    "fat_g": 21.4,
    "fibre_g": 1.0,
    "folate_ug": 52.0,
    "iron_mg": 1.94,
    "magnesium_mg": 13.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 291.0,
    "potassium_mg": 173.0,
    "protein_g": 11.0,
    "salt_g": 1.6625,
    "sat_fat_g": 9.27,
    "sodium_mg": 665.0,
    "sugar_g": 1.92,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707324",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
