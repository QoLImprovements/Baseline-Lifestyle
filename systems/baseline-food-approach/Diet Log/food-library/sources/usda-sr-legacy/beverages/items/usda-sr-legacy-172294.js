/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.2,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Toddler drink, MEAD JOHNSON, PurAmino Toddler Powder, with ARA and DHA, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 470.0,
    "carbs_g": 55.7,
    "energy_kcal": 2140.0,
    "fat_g": 26.0,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 9.0,
    "magnesium_mg": 55.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 260.0,
    "potassium_mg": 550.0,
    "protein_g": 13.9,
    "salt_g": 0.575,
    "sat_fat_g": 10.3,
    "sodium_mg": 230.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172294",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
