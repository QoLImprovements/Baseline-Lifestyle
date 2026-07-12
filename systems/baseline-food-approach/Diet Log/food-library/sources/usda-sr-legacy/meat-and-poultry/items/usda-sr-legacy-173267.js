/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "biscuit",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Fast foods, biscuit, with egg and ham",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 16.4,
    "energy_kcal": 973.0,
    "fat_g": 14.1,
    "fibre_g": 0.4,
    "folate_ug": 34.0,
    "iron_mg": 2.37,
    "magnesium_mg": 16.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 165.0,
    "potassium_mg": 166.0,
    "protein_g": 10.6,
    "salt_g": 2.725,
    "sat_fat_g": 3.08,
    "sodium_mg": 1090.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173267",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
