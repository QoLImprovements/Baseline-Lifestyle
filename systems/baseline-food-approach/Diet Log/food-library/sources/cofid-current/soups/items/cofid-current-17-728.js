/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (Nestlé). Average of chicken, vegetable, tomato and potato & leek flavours",
  "id": "cofid-current-17-728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Build-up powder, soup, assorted flavours",
  "nutritionPerBasis": {
    "calcium_mg": 763.0,
    "carbs_g": 57.3,
    "energy_kcal": 407.0,
    "fat_g": 14.9,
    "fibre_g": 6.5,
    "folate_ug": 146.0,
    "iron_mg": 10.5,
    "magnesium_mg": 232.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 541.0,
    "potassium_mg": 767.0,
    "protein_g": 14.4,
    "salt_g": 2.45,
    "sat_fat_g": 4.6,
    "sodium_mg": 980.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 583.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 6.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-728",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "paa",
    "soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
