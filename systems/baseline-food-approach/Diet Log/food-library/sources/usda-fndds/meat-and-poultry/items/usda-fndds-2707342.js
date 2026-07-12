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
  "id": "usda-fndds-2707342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Sausage griddle/pancake sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 17.0,
    "energy_kcal": 278.0,
    "fat_g": 18.7,
    "fibre_g": 0.6,
    "folate_ug": 30.0,
    "iron_mg": 1.25,
    "magnesium_mg": 13.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 189.0,
    "potassium_mg": 174.0,
    "protein_g": 10.5,
    "salt_g": 1.2625,
    "sat_fat_g": 5.57,
    "sodium_mg": 505.0,
    "sugar_g": 6.27,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707342",
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
