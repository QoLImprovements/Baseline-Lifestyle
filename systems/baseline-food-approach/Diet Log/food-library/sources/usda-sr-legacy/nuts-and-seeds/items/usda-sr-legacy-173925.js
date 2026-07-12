/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "package-1-nlea-serving",
      "kind": "unit",
      "label": "package (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, oatmeal, REAL MEDLEYS, cherry pistachio, dry",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 66.7,
    "energy_kcal": 1650.0,
    "fat_g": 11.0,
    "fibre_g": 7.1,
    "folate_ug": 22.0,
    "iron_mg": 2.99,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 333.0,
    "potassium_mg": 501.0,
    "protein_g": 12.0,
    "salt_g": 0.4525,
    "sat_fat_g": 1.39,
    "sodium_mg": 181.0,
    "sugar_g": 26.3,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173925",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
