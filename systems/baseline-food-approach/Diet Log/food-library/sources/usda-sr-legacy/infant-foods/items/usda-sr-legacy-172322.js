/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "serving-100-ml",
      "kind": "unit",
      "label": "serving 100 ml"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, AR, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 390.0,
    "carbs_g": 57.4,
    "energy_kcal": 2110.0,
    "fat_g": 25.0,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 9.16,
    "magnesium_mg": 40.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 260.0,
    "potassium_mg": 540.0,
    "protein_g": 12.4,
    "salt_g": 0.5,
    "sat_fat_g": 10.5,
    "sodium_mg": 200.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172322",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
