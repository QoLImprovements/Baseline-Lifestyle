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
  "id": "usda-sr-legacy-172030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Fast foods, biscuit, with ham",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 38.8,
    "energy_kcal": 342.0,
    "fat_g": 16.3,
    "fibre_g": 0.7,
    "folate_ug": 34.0,
    "iron_mg": 2.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 490.0,
    "potassium_mg": 174.0,
    "protein_g": 11.8,
    "salt_g": 2.435,
    "sat_fat_g": 10.1,
    "sodium_mg": 974.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172030",
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
